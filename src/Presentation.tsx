import { useState, useRef, useCallback } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';
import PaletteIcon from '@mui/icons-material/Palette';
import domtoimage from 'dom-to-image-more';
import jsPDF from 'jspdf';
import PPTXGenJS from 'pptxgenjs';

import CoverSlide from './slides/CoverSlide';
import SnapshotSlide from './slides/SnapshotSlide';
import EconomicsSlide from './slides/EconomicsSlide';
import OperatingModelSlide from './slides/OperatingModelSlide';
import MonthlyGrowthSlide from './slides/MonthlyGrowthSlide';
import CampaignTimelineSlide from './slides/CampaignTimelineSlide';
import GeographySlide from './slides/GeographySlide';
import TopCitiesBranchesSlide from './slides/TopCitiesBranchesSlide';
import PlatformDeepDiveSlide from './slides/PlatformDeepDiveSlide';
import StrengthsSlide from './slides/StrengthsSlide';
import ActionPlanSlide from './slides/ActionPlanSlide';
import TopInfluencers1Slide from './slides/TopInfluencers1Slide';
import TopInfluencers2Slide from './slides/TopInfluencers2Slide';
import BestPerformingContentSlide from './slides/BestPerformingContentSlide';
import ExecutiveSummarySlide from './slides/ExecutiveSummarySlide';
import ClosingSlide from './slides/ClosingSlide';
import LiveReportSlide from './slides/LiveReportSlide';
import EditPanel from './EditPanel';
import ExportModal from './ExportModal';
import CustomizePanel from './CustomizePanel';
import SlideWrapper from './SlideWrapper';
import type { SlideCustomization } from './CustomizePanel';

const W = 1280;
const H = 720;

const ALL_SLIDES = [
  { component: CoverSlide, label: 'Cover', number: '01' },
  { component: SnapshotSlide, label: 'Snapshot', number: '02' },
  { component: EconomicsSlide, label: 'Economics', number: '03' },
  { component: OperatingModelSlide, label: 'Operating Model', number: '04' },
  { component: MonthlyGrowthSlide, label: 'Monthly Growth', number: '05' },
  { component: CampaignTimelineSlide, label: 'Campaign Timeline', number: '06' },
  { component: GeographySlide, label: 'Geography', number: '07' },
  { component: TopCitiesBranchesSlide, label: 'Top Cities & Branches', number: '08' },
  { component: PlatformDeepDiveSlide, label: 'Platform Deep Dive', number: '09' },
  { component: StrengthsSlide, label: 'Strengths', number: '10' },
  { component: ActionPlanSlide, label: 'Action Plan', number: '11' },
  { component: TopInfluencers1Slide, label: 'Top Influencers 1', number: '12' },
  { component: TopInfluencers2Slide, label: 'Top Influencers 2', number: '13' },
  { component: BestPerformingContentSlide, label: 'Best Content', number: '14' },
  { component: ExecutiveSummarySlide, label: 'Executive Summary', number: '15' },
  { component: ClosingSlide, label: 'Closing', number: '16' },
  { component: LiveReportSlide, label: 'Live Report', number: '17' },
];

type ViewMode = 'deck' | 'grid';

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>('deck');
  const [showExport, setShowExport] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const captureStageRef = useRef<HTMLDivElement>(null);
  const [captureSlideIndex, setCaptureSlideIndex] = useState(-1);
  const [slideCustomizations, setSlideCustomizations] = useState<Record<number, SlideCustomization>>(() => {
    const saved = localStorage.getItem('slide-customizations');
    return saved ? JSON.parse(saved) : {};
  });

  const slidesComponents = ALL_SLIDES.map((s) => s.component);
  const CurrentSlideComponent = ALL_SLIDES[currentSlide].component;

  const paginate = (dir: number) => {
    const next = currentSlide + dir;
    if (next >= 0 && next < ALL_SLIDES.length) setCurrentSlide(next);
  };

  const handleCustomizationChange = (index: number, config: SlideCustomization) => {
    const updated = { ...slideCustomizations, [index]: config };
    setSlideCustomizations(updated);
    // Persist to localStorage
    localStorage.setItem('slide-customizations', JSON.stringify(updated));
  };

  const waitFrames = () =>
    new Promise<void>((res) => requestAnimationFrame(() => requestAnimationFrame(() => res())));

  const captureSlide = useCallback(async (): Promise<string> => {
    const el = captureStageRef.current;
    if (!el) throw new Error('Stage not found');
    return domtoimage.toPng(el, {
      width: W,
      height: H,
      bgcolor: '#ffffff',
      cacheBust: true,
      style: {
        width: `${W}px`,
        height: `${H}px`,
        margin: '0',
        border: '0',
        borderRadius: '0',
        boxShadow: 'none',
        outline: '0',
        overflow: 'hidden',
        transform: 'none',
      },
    });
  }, []);

  const captureAllSlides = useCallback(async (
    onProgress: (i: number, total: number, text: string) => void
  ): Promise<string[]> => {
    const images: string[] = [];
    for (let i = 0; i < slidesComponents.length; i++) {
      onProgress(i, slidesComponents.length, `Rendering slide ${i + 1} of ${slidesComponents.length}…`);
      setCaptureSlideIndex(i);
      await waitFrames();
      await new Promise((r) => setTimeout(r, 80));
      const img = await captureSlide();
      images.push(img);
    }
    setCaptureSlideIndex(-1);
    return images;
  }, [slidesComponents, captureSlide]);

  const exportPDF = useCallback(async (onProgress: (i: number, total: number, text: string) => void) => {
    const images = await captureAllSlides(onProgress);
    onProgress(slidesComponents.length, slidesComponents.length, 'Building PDF…');
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [W, H] });
    images.forEach((img, i) => {
      if (i > 0) pdf.addPage([W, H], 'landscape');
      pdf.addImage(img, 'PNG', 0, 0, W, H);
    });
    pdf.save('starbucks-ksa-report.pdf');
  }, [captureAllSlides, slidesComponents.length]);

  const exportPPTX = useCallback(async (onProgress: (i: number, total: number, text: string) => void) => {
    const images = await captureAllSlides(onProgress);
    onProgress(slidesComponents.length, slidesComponents.length, 'Building PPTX…');
    const pptx = new PPTXGenJS();
    pptx.defineLayout({ name: 'DECK_16_9', width: 13.333333, height: 7.5 });
    pptx.layout = 'DECK_16_9';
    pptx.author = 'Grand Community';
    pptx.company = 'Grand Community';
    pptx.subject = 'Starbucks KSA Influencer Intelligence';
    pptx.title = 'Starbucks KSA Creator Engine Report';
    images.forEach((img) => {
      const slide = pptx.addSlide();
      slide.background = { color: 'FFFFFF' };
      slide.addImage({ data: img, x: 0, y: 0, w: 13.333333, h: 7.5 });
    });
    await pptx.writeFile({ fileName: 'starbucks-ksa-report.pptx' });
  }, [captureAllSlides, slidesComponents.length]);

  const exportHTML = useCallback(async (onProgress: (i: number, total: number, text: string) => void) => {
    const images = await captureAllSlides(onProgress);
    onProgress(slidesComponents.length, slidesComponents.length, 'Building HTML…');
    const slides = ALL_SLIDES.map((s, i) => ({
      label: s.label,
      number: s.number,
      img: images[i],
    }));

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Starbucks KSA Creator Engine Report</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{background:#111;color:#fff;font-family:system-ui,sans-serif;min-height:100vh}
.header{display:flex;align-items:center;justify-content:space-between;padding:16px 24px;background:#0a0a0a;border-bottom:1px solid #222}
.header h1{font-size:18px;font-weight:700;letter-spacing:-.3px}
.header span{font-size:12px;color:#888}
.main{display:flex;height:calc(100vh - 57px)}
.sidebar{width:220px;background:#0d0d0d;border-right:1px solid #1e1e1e;overflow-y:auto;flex-shrink:0}
.sidebar-item{display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;border-bottom:1px solid #1a1a1a;transition:background .15s}
.sidebar-item:hover{background:#1a1a1a}
.sidebar-item.active{background:#1e3a2a;border-left:3px solid #00704A}
.sidebar-num{font-size:10px;color:#555;font-weight:700;width:20px;flex-shrink:0}
.sidebar-label{font-size:12px;color:#ccc;font-weight:500;line-height:1.3}
.sidebar-item.active .sidebar-label{color:#fff}
.canvas-area{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;overflow:hidden;background:#111}
.slide-img{max-width:100%;max-height:calc(100vh - 200px);border-radius:8px;box-shadow:0 24px 64px rgba(0,0,0,.6);border:1px solid #222}
.nav-bar{display:flex;align-items:center;gap:16px;margin-top:16px}
.nav-btn{background:#222;border:none;color:#fff;padding:8px 18px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600;transition:background .15s}
.nav-btn:hover:not(:disabled){background:#333}
.nav-btn:disabled{opacity:.35;cursor:default}
.nav-count{font-size:13px;color:#888}
.dot-row{display:flex;gap:5px;flex-wrap:wrap;justify-content:center;max-width:400px}
.dot{width:7px;height:7px;border-radius:50%;background:#333;cursor:pointer;transition:background .15s}
.dot.active{background:#00704A}
.dot:hover:not(.active){background:#555}
</style>
</head>
<body>
<div class="header">
  <h1>Starbucks KSA Creator Engine Report</h1>
  <span>JUL 2025 — MAR 2026 · ${slides.length} Slides</span>
</div>
<div class="main">
  <div class="sidebar">
    ${slides.map((s, i) => `<div class="sidebar-item${i === 0 ? ' active' : ''}" onclick="goTo(${i})" id="sb-${i}"><span class="sidebar-num">${s.number}</span><span class="sidebar-label">${s.label}</span></div>`).join('')}
  </div>
  <div class="canvas-area">
    <img class="slide-img" id="slide-img" src="${slides[0].img}" alt="Slide 1"/>
    <div class="nav-bar">
      <button class="nav-btn" onclick="prev()" id="btn-prev" disabled>← Prev</button>
      <div style="display:flex;flex-direction:column;align-items:center;gap:8px">
        <span class="nav-count" id="nav-count">1 / ${slides.length}</span>
        <div class="dot-row">${slides.map((_, i) => `<div class="dot${i === 0 ? ' active' : ''}" onclick="goTo(${i})" id="dot-${i}"></div>`).join('')}</div>
      </div>
      <button class="nav-btn" onclick="next()" id="btn-next">Next →</button>
    </div>
  </div>
</div>
<script>
const imgs = [${slides.map((s) => `"${s.img}"`).join(',')}];
let cur = 0;
function goTo(i){
  document.getElementById('sb-'+cur).classList.remove('active');
  document.getElementById('dot-'+cur).classList.remove('active');
  cur=i;
  document.getElementById('slide-img').src=imgs[i];
  document.getElementById('nav-count').textContent=(i+1)+' / ${slides.length}';
  document.getElementById('sb-'+i).classList.add('active');
  document.getElementById('sb-'+i).scrollIntoView({block:'nearest'});
  document.getElementById('dot-'+i).classList.add('active');
  document.getElementById('btn-prev').disabled=i===0;
  document.getElementById('btn-next').disabled=i===${slides.length - 1};
}
function prev(){if(cur>0)goTo(cur-1);}
function next(){if(cur<${slides.length - 1})goTo(cur+1);}
document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')prev();if(e.key==='ArrowRight')next();});
</script>
</body>
</html>`;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'starbucks-ksa-report.html';
    a.click();
    URL.revokeObjectURL(url);
  }, [captureAllSlides, slidesComponents.length]);

  const CaptureSlide = captureSlideIndex >= 0 ? slidesComponents[captureSlideIndex] : null;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', bgcolor: '#f8f9fa' }}>
      {/* Toolbar */}
      <Box
        sx={{
          bgcolor: 'white',
          borderBottom: '1px solid',
          borderColor: 'divider',
          px: 2,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          flexShrink: 0,
          zIndex: 10,
        }}
      >
        {/* Left: branding */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              bgcolor: '#00704A',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SlideshowIcon sx={{ color: 'white', fontSize: 18 }} />
          </Box>
          <Box>
            <Typography variant="body2" fontWeight={700} lineHeight={1.2} color="text.primary">
              Starbucks KSA
            </Typography>
            <Typography variant="caption" color="text.secondary" lineHeight={1}>
              Creator Engine Report · JUL 2025 – MAR 2026
            </Typography>
          </Box>
          <Chip
            label={`${ALL_SLIDES.length} slides`}
            size="small"
            sx={{ ml: 1, bgcolor: '#f3faf7', color: '#00704A', fontWeight: 700, fontSize: 11 }}
          />
        </Box>

        {/* Center: navigation */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton
            onClick={() => paginate(-1)}
            disabled={currentSlide === 0}
            size="small"
            sx={{ bgcolor: 'grey.100', '&:hover': { bgcolor: 'grey.200' } }}
          >
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <Typography variant="body2" color="text.secondary" sx={{ minWidth: 90, textAlign: 'center' }}>
            {currentSlide + 1} / {ALL_SLIDES.length}
          </Typography>
          <IconButton
            onClick={() => paginate(1)}
            disabled={currentSlide === ALL_SLIDES.length - 1}
            size="small"
            sx={{ bgcolor: 'grey.100', '&:hover': { bgcolor: 'grey.200' } }}
          >
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Right: actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Tooltip title={viewMode === 'deck' ? 'Grid view' : 'Deck view'}>
            <IconButton
              size="small"
              onClick={() => setViewMode(viewMode === 'deck' ? 'grid' : 'deck')}
              sx={{ bgcolor: 'grey.100', '&:hover': { bgcolor: 'grey.200' } }}
            >
              {viewMode === 'deck' ? <GridViewIcon fontSize="small" /> : <ViewListIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit slide data">
            <IconButton
              size="small"
              onClick={() => setShowEdit(!showEdit)}
              sx={{
                bgcolor: showEdit ? '#e8f5e9' : 'grey.100',
                color: showEdit ? 'primary.main' : 'inherit',
                '&:hover': { bgcolor: showEdit ? '#c8e6c9' : 'grey.200' },
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Customize design">
            <IconButton
              size="small"
              onClick={() => setShowCustomize(!showCustomize)}
              sx={{
                bgcolor: showCustomize ? '#fce4ec' : 'grey.100',
                color: showCustomize ? '#c2185b' : 'inherit',
                '&:hover': { bgcolor: showCustomize ? '#f8bbd0' : 'grey.200' },
              }}
            >
              <PaletteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Button
            variant="contained"
            size="small"
            startIcon={<FileDownloadIcon />}
            onClick={() => setShowExport(true)}
            sx={{
              bgcolor: '#00704A',
              '&:hover': { bgcolor: '#005f3e' },
              textTransform: 'none',
              fontWeight: 700,
              borderRadius: 2,
              px: 2,
            }}
          >
            Export
          </Button>
        </Box>
      </Box>

      {/* Body */}
      <Box sx={{ display: 'flex', flex: 1, minHeight: 0, overflow: 'hidden' }}>
        {/* Slide list / Thumbnail sidebar */}
        {viewMode === 'deck' && (
          <Box
            sx={{
              width: 180,
              flexShrink: 0,
              bgcolor: 'white',
              borderRight: '1px solid',
              borderColor: 'divider',
              overflowY: 'auto',
              py: 1,
            }}
          >
            {ALL_SLIDES.map((s, i) => (
              <Box
                key={i}
                onClick={() => setCurrentSlide(i)}
                sx={{
                  px: 1.5,
                  py: 1,
                  cursor: 'pointer',
                  borderLeft: '3px solid',
                  borderColor: i === currentSlide ? '#00704A' : 'transparent',
                  bgcolor: i === currentSlide ? '#f3faf7' : 'transparent',
                  '&:hover': { bgcolor: i === currentSlide ? '#f3faf7' : 'grey.50' },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: i === currentSlide ? '#00704A' : 'text.disabled',
                    fontWeight: 700,
                    fontSize: 10,
                    width: 20,
                    flexShrink: 0,
                  }}
                >
                  {s.number}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: i === currentSlide ? 'text.primary' : 'text.secondary',
                    fontWeight: i === currentSlide ? 700 : 400,
                    fontSize: 11,
                    lineHeight: 1.3,
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        )}

        {/* Main area */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            overflow: viewMode === 'grid' ? 'auto' : 'hidden',
            p: viewMode === 'grid' ? 3 : 2.5,
            display: viewMode === 'grid' ? 'grid' : 'flex',
            gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(280px, 1fr))' : undefined,
            gap: viewMode === 'grid' ? 2 : 0,
            alignItems: viewMode === 'deck' ? 'center' : undefined,
            justifyContent: viewMode === 'deck' ? 'center' : undefined,
          }}
        >
          {viewMode === 'deck' && (
            <Box className="deck-slide-stage" sx={{ bgcolor: 'white', boxShadow: 4 }}>
              <SlideWrapper customization={slideCustomizations[currentSlide]}>
                <CurrentSlideComponent />
              </SlideWrapper>
            </Box>
          )}
          {viewMode === 'grid' && (
            ALL_SLIDES.map((s, i) => (
              <Box
                key={i}
                onClick={() => { setCurrentSlide(i); setViewMode('deck'); }}
                sx={{
                  cursor: 'pointer',
                  borderRadius: 2,
                  overflow: 'hidden',
                  border: '2px solid',
                  borderColor: i === currentSlide ? '#00704A' : 'divider',
                  boxShadow: i === currentSlide ? '0 0 0 3px rgba(0,112,74,0.15)' : 2,
                  transition: 'all 0.15s',
                  '&:hover': { boxShadow: 4, borderColor: '#00704A' },
                  aspectRatio: '16/9',
                  position: 'relative',
                  bgcolor: 'white',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    transform: 'scale(0.219)',
                    transformOrigin: 'top left',
                    width: `${100 / 0.219}%`,
                    height: `${100 / 0.219}%`,
                    pointerEvents: 'none',
                  }}
                >
                  <s.component />
                </Box>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    bgcolor: 'rgba(0,0,0,0.6)',
                    px: 1,
                    py: 0.5,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 9, fontWeight: 700 }}>
                    {s.number}
                  </Typography>
                  <Typography sx={{ color: 'white', fontSize: 10, fontWeight: 600 }}>
                    {s.label}
                  </Typography>
                </Box>
              </Box>
            ))
          )}
        </Box>

        {/* Edit panel */}
        {showEdit && (
          <Box
            sx={{
              width: 320,
              flexShrink: 0,
              borderLeft: '1px solid',
              borderColor: 'divider',
              bgcolor: 'white',
              overflowY: 'auto',
            }}
          >
            <Box
              sx={{
                px: 2,
                py: 1.5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="body2" fontWeight={700}>
                Edit Data
              </Typography>
              <IconButton size="small" onClick={() => setShowEdit(false)}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            <EditPanel />
          </Box>
        )}
      </Box>

      {/* Dot navigation (deck mode) */}
      {viewMode === 'deck' && (
        <Box
          sx={{
            bgcolor: 'white',
            borderTop: '1px solid',
            borderColor: 'divider',
            px: 3,
            py: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
            flexWrap: 'wrap',
            flexShrink: 0,
          }}
        >
          {ALL_SLIDES.map((_, i) => (
            <Box
              key={i}
              onClick={() => setCurrentSlide(i)}
              sx={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                bgcolor: i === currentSlide ? '#00704A' : 'grey.300',
                cursor: 'pointer',
                transition: 'background-color 0.15s',
                '&:hover': { bgcolor: i === currentSlide ? '#00704A' : 'grey.400' },
              }}
            />
          ))}
        </Box>
      )}

      {/* Hidden capture stage */}
      <Box
        sx={{
          position: 'fixed',
          left: '-9999px',
          top: 0,
          width: W,
          height: H,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <Box
          ref={captureStageRef}
          sx={{ width: W, height: H, overflow: 'hidden', bgcolor: 'white' }}
        >
          {CaptureSlide && <CaptureSlide />}
        </Box>
      </Box>

      {/* Export modal */}
      {showExport && (
        <ExportModal
          onClose={() => setShowExport(false)}
          onExportPDF={exportPDF}
          onExportPPTX={exportPPTX}
          onExportHTML={exportHTML}
          totalSlides={ALL_SLIDES.length}
        />
      )}

      {/* Customize panel */}
      {showCustomize && (
        <CustomizePanel
          slideIndex={currentSlide}
          onClose={() => setShowCustomize(false)}
          onCustomizationChange={handleCustomizationChange}
          currentCustomization={slideCustomizations[currentSlide] || {
            bgColor: '#ffffff',
            textColor: '#1a1a1a',
            accentColor: '#00704A',
            fontFamily: 'Roboto',
            titleSize: 32,
            bodySize: 14,
            layout: 'standard',
            padding: 32,
            borderRadius: 8,
            shadowIntensity: 'medium',
          }}
        />
      )}
    </Box>
  );
}
