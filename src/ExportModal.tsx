import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import HtmlIcon from '@mui/icons-material/Html';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Props {
  onClose: () => void;
  onExportPDF: (onProgress: (i: number, total: number, text: string) => void) => Promise<void>;
  onExportPPTX: (onProgress: (i: number, total: number, text: string) => void) => Promise<void>;
  onExportHTML: (onProgress: (i: number, total: number, text: string) => void) => Promise<void>;
  totalSlides: number;
}

type ExportFormat = 'pdf' | 'pptx' | 'html';

export default function ExportModal({ onClose, onExportPDF, onExportPPTX, onExportHTML, totalSlides }: Props) {
  const [exporting, setExporting] = useState(false);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('');
  const [format, setFormat] = useState<ExportFormat | null>(null);

  const handleProgress = (i: number, total: number, text: string) => {
    setProgress(Math.round((i / total) * 90));
    setStatusText(text);
  };

  const run = async (fmt: ExportFormat) => {
    setFormat(fmt);
    setExporting(true);
    setProgress(0);
    setStatusText('Initializing…');
    try {
      if (fmt === 'pdf') await onExportPDF(handleProgress);
      else if (fmt === 'pptx') await onExportPPTX(handleProgress);
      else await onExportHTML(handleProgress);
      setProgress(100);
      setStatusText('Download complete!');
      setDone(true);
      setTimeout(onClose, 1500);
    } catch (e) {
      console.error(e);
      alert('Export failed: ' + (e instanceof Error ? e.message : String(e)));
      setExporting(false);
      setDone(false);
    }
  };

  const formatLabels: Record<ExportFormat, { label: string; desc: string; icon: React.ReactNode; color: string }> = {
    pdf: {
      label: 'Export as PDF',
      desc: 'Best for sharing, printing & archiving',
      icon: <PictureAsPdfIcon />,
      color: '#d32f2f',
    },
    pptx: {
      label: 'Export as PPTX',
      desc: 'Editable PowerPoint presentation',
      icon: <SlideshowIcon />,
      color: '#d04a02',
    },
    html: {
      label: 'Export as HTML',
      desc: 'Self-contained interactive web file',
      icon: <HtmlIcon />,
      color: '#1565c0',
    },
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: 'rgba(0,0,0,0.55)',
        zIndex: 1300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={!exporting ? onClose : undefined}
    >
      <Box
        sx={{
          bgcolor: 'white',
          borderRadius: 3,
          p: 4,
          width: 440,
          boxShadow: 24,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {!exporting ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3 }}>
              <Box>
                <Typography variant="h6" fontWeight={800}>
                  Export Presentation
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={0.5}>
                  All {totalSlides} slides · 1280 × 720 px (16:9)
                </Typography>
              </Box>
              <IconButton size="small" onClick={onClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {(Object.keys(formatLabels) as ExportFormat[]).map((fmt) => {
                const f = formatLabels[fmt];
                return (
                  <Box
                    key={fmt}
                    onClick={() => run(fmt)}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      border: '2px solid',
                      borderColor: 'divider',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                      '&:hover': {
                        borderColor: f.color,
                        bgcolor: `${f.color}08`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        bgcolor: f.color,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        flexShrink: 0,
                      }}
                    >
                      {f.icon}
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body1" fontWeight={700}>
                        {f.label}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {f.desc}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </>
        ) : (
          <Box sx={{ textAlign: 'center', py: 2 }}>
            {done ? (
              <CheckCircleIcon sx={{ fontSize: 56, color: '#00704A', mb: 2 }} />
            ) : (
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  bgcolor: '#f3faf7',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                  color: '#00704A',
                }}
              >
                {format ? formatLabels[format].icon : null}
              </Box>
            )}
            <Typography variant="h6" fontWeight={800} mb={0.5}>
              {done ? 'Done!' : 'Exporting…'}
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={3}>
              {statusText}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: 'grey.100',
                '& .MuiLinearProgress-bar': {
                  bgcolor: '#00704A',
                  borderRadius: 4,
                },
              }}
            />
            <Typography variant="caption" color="text.secondary" mt={1} display="block">
              {progress}%
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
