import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import PaletteIcon from '@mui/icons-material/Palette';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export interface SlideCustomization {
  bgColor: string;
  bgGradientEnd?: string;
  textColor: string;
  accentColor: string;
  fontFamily: string;
  titleSize: number;
  bodySize: number;
  layout: 'standard' | 'minimalist' | 'bold' | 'gradient';
  padding: number;
  borderRadius: number;
  shadowIntensity: 'none' | 'light' | 'medium' | 'heavy';
}

const DEFAULT_CUSTOMIZATION: SlideCustomization = {
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
};

const FONT_FAMILIES = [
  'Roboto',
  'Georgia',
  'Times New Roman',
  'Courier New',
  'Verdana',
  'Arial',
  'Impact',
  'Comic Sans MS',
];

const LAYOUT_PRESETS: Record<string, SlideCustomization> = {
  standard: DEFAULT_CUSTOMIZATION,
  minimalist: {
    bgColor: '#f5f5f5',
    textColor: '#000000',
    accentColor: '#1976d2',
    fontFamily: 'Arial',
    titleSize: 28,
    bodySize: 12,
    layout: 'minimalist',
    padding: 24,
    borderRadius: 4,
    shadowIntensity: 'light',
  },
  bold: {
    bgColor: '#1a1a1a',
    bgGradientEnd: '#333333',
    textColor: '#ffffff',
    accentColor: '#ff6b35',
    fontFamily: 'Impact',
    titleSize: 42,
    bodySize: 16,
    layout: 'bold',
    padding: 40,
    borderRadius: 16,
    shadowIntensity: 'heavy',
  },
  gradient: {
    bgColor: '#667eea',
    bgGradientEnd: '#764ba2',
    textColor: '#ffffff',
    accentColor: '#f093fb',
    fontFamily: 'Roboto',
    titleSize: 36,
    bodySize: 14,
    layout: 'gradient',
    padding: 32,
    borderRadius: 12,
    shadowIntensity: 'medium',
  },
};

interface Props {
  slideIndex: number;
  onClose: () => void;
  onCustomizationChange: (index: number, config: SlideCustomization) => void;
  currentCustomization: SlideCustomization;
}

export default function CustomizePanel({
  slideIndex,
  onClose,
  onCustomizationChange,
  currentCustomization,
}: Props) {
  const [config, setConfig] = useState<SlideCustomization>(currentCustomization);
  const [saved, setSaved] = useState(false);

  const update = <K extends keyof SlideCustomization>(key: K, value: SlideCustomization[K]) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    onCustomizationChange(slideIndex, config);
    setSaved(true);
  };

  const applyPreset = (presetName: string) => {
    const preset = LAYOUT_PRESETS[presetName];
    if (preset) {
      setConfig(preset);
      onCustomizationChange(slideIndex, preset);
      setSaved(true);
    }
  };

  const handleReset = () => {
    setConfig(DEFAULT_CUSTOMIZATION);
    onCustomizationChange(slideIndex, DEFAULT_CUSTOMIZATION);
    setSaved(true);
  };

  const shadowMap = {
    none: '0 0 0px rgba(0,0,0,0)',
    light: '0 2px 8px rgba(0,0,0,0.08)',
    medium: '0 8px 24px rgba(0,0,0,0.12)',
    heavy: '0 16px 48px rgba(0,0,0,0.24)',
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        width: 380,
        zIndex: 1200,
        borderRadius: 0,
        boxShadow: '-4px 0 16px rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          px: 3,
          py: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}
      >
        <Typography variant="h6" fontWeight={800}>
          Customize Slide {slideIndex + 1}
        </Typography>
        <IconButton size="small" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, p: 2, overflow: 'auto' }}>
        {/* Layout Presets */}
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <ViewWeekIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="subtitle2" fontWeight={700}>
              Layout Presets
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={1}>
              {Object.keys(LAYOUT_PRESETS).map((preset) => (
                <Button
                  key={preset}
                  variant={config.layout === preset ? 'contained' : 'outlined'}
                  fullWidth
                  size="small"
                  onClick={() => applyPreset(preset)}
                  sx={{
                    textTransform: 'capitalize',
                    fontWeight: 700,
                  }}
                >
                  {preset}
                </Button>
              ))}
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Colors */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <PaletteIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="subtitle2" fontWeight={700}>
              Colors
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2.5}>
              <Box>
                <Typography variant="caption" fontWeight={700} color="text.secondary" mb={1} display="block">
                  Background Color
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 1,
                      border: '2px solid',
                      borderColor: 'divider',
                      bgcolor: config.bgColor,
                      cursor: 'pointer',
                    }}
                    component="input"
                    type="color"
                    value={config.bgColor}
                    onChange={(e) => update('bgColor', (e.target as HTMLInputElement).value)}
                  />
                  <TextField
                    size="small"
                    value={config.bgColor}
                    onChange={(e) => update('bgColor', e.target.value)}
                    fullWidth
                    sx={{ '& input': { fontSize: 12, fontFamily: 'monospace' } }}
                  />
                </Box>
              </Box>

              <Box>
                <Typography variant="caption" fontWeight={700} color="text.secondary" mb={1} display="block">
                  Text Color
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 1,
                      border: '2px solid',
                      borderColor: 'divider',
                      bgcolor: config.textColor,
                      cursor: 'pointer',
                    }}
                    component="input"
                    type="color"
                    value={config.textColor}
                    onChange={(e) => update('textColor', (e.target as HTMLInputElement).value)}
                  />
                  <TextField
                    size="small"
                    value={config.textColor}
                    onChange={(e) => update('textColor', e.target.value)}
                    fullWidth
                    sx={{ '& input': { fontSize: 12, fontFamily: 'monospace' } }}
                  />
                </Box>
              </Box>

              <Box>
                <Typography variant="caption" fontWeight={700} color="text.secondary" mb={1} display="block">
                  Accent Color
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 1,
                      border: '2px solid',
                      borderColor: 'divider',
                      bgcolor: config.accentColor,
                      cursor: 'pointer',
                    }}
                    component="input"
                    type="color"
                    value={config.accentColor}
                    onChange={(e) => update('accentColor', (e.target as HTMLInputElement).value)}
                  />
                  <TextField
                    size="small"
                    value={config.accentColor}
                    onChange={(e) => update('accentColor', e.target.value)}
                    fullWidth
                    sx={{ '& input': { fontSize: 12, fontFamily: 'monospace' } }}
                  />
                </Box>
              </Box>

              {config.layout === 'gradient' && (
                <Box>
                  <Typography variant="caption" fontWeight={700} color="text.secondary" mb={1} display="block">
                    Gradient End Color
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 1,
                        border: '2px solid',
                        borderColor: 'divider',
                        bgcolor: config.bgGradientEnd || '#333333',
                        cursor: 'pointer',
                      }}
                      component="input"
                      type="color"
                      value={config.bgGradientEnd || '#333333'}
                      onChange={(e) => update('bgGradientEnd', (e.target as HTMLInputElement).value)}
                    />
                    <TextField
                      size="small"
                      value={config.bgGradientEnd || '#333333'}
                      onChange={(e) => update('bgGradientEnd', e.target.value)}
                      fullWidth
                      sx={{ '& input': { fontSize: 12, fontFamily: 'monospace' } }}
                    />
                  </Box>
                </Box>
              )}
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Typography */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <FormatSizeIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="subtitle2" fontWeight={700}>
              Typography
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2.5}>
              <FormControl fullWidth size="small">
                <InputLabel>Font Family</InputLabel>
                <Select
                  value={config.fontFamily}
                  onChange={(e) => update('fontFamily', e.target.value)}
                  label="Font Family"
                >
                  {FONT_FAMILIES.map((font) => (
                    <MenuItem key={font} value={font}>
                      {font}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Box>
                <Typography variant="caption" fontWeight={700} color="text.secondary" mb={1} display="block">
                  Title Size: {config.titleSize}px
                </Typography>
                <Slider
                  value={config.titleSize}
                  onChange={(_, value) => update('titleSize', value as number)}
                  min={20}
                  max={56}
                  step={2}
                  marks={[
                    { value: 20, label: '20' },
                    { value: 56, label: '56' },
                  ]}
                />
              </Box>

              <Box>
                <Typography variant="caption" fontWeight={700} color="text.secondary" mb={1} display="block">
                  Body Size: {config.bodySize}px
                </Typography>
                <Slider
                  value={config.bodySize}
                  onChange={(_, value) => update('bodySize', value as number)}
                  min={10}
                  max={24}
                  step={1}
                  marks={[
                    { value: 10, label: '10' },
                    { value: 24, label: '24' },
                  ]}
                />
              </Box>
            </Stack>
          </AccordionDetails>
        </Accordion>

        {/* Layout */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle2" fontWeight={700}>
              Layout
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2.5}>
              <Box>
                <Typography variant="caption" fontWeight={700} color="text.secondary" mb={1} display="block">
                  Padding: {config.padding}px
                </Typography>
                <Slider
                  value={config.padding}
                  onChange={(_, value) => update('padding', value as number)}
                  min={16}
                  max={64}
                  step={4}
                  marks={[
                    { value: 16, label: '16' },
                    { value: 64, label: '64' },
                  ]}
                />
              </Box>

              <Box>
                <Typography variant="caption" fontWeight={700} color="text.secondary" mb={1} display="block">
                  Border Radius: {config.borderRadius}px
                </Typography>
                <Slider
                  value={config.borderRadius}
                  onChange={(_, value) => update('borderRadius', value as number)}
                  min={0}
                  max={32}
                  step={2}
                  marks={[
                    { value: 0, label: '0' },
                    { value: 32, label: '32' },
                  ]}
                />
              </Box>

              <FormControl fullWidth size="small">
                <InputLabel>Shadow Intensity</InputLabel>
                <Select
                  value={config.shadowIntensity}
                  onChange={(e) => update('shadowIntensity', e.target.value as any)}
                  label="Shadow Intensity"
                >
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="light">Light</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="heavy">Heavy</MenuItem>
                </Select>
              </FormControl>

              <Paper
                sx={{
                  p: 2,
                  bgcolor: config.bgColor,
                  color: config.textColor,
                  borderRadius: `${config.borderRadius}px`,
                  boxShadow: shadowMap[config.shadowIntensity],
                }}
              >
                <Typography variant="body2" fontWeight={700} mb={1}>
                  Preview
                </Typography>
                <Typography variant="caption">
                  This is how your customization looks
                </Typography>
              </Paper>
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Divider />

      {/* Footer Actions */}
      <Box sx={{ p: 2, display: 'flex', gap: 1, flexShrink: 0 }}>
        <Button
          fullWidth
          variant="contained"
          size="small"
          startIcon={<SaveIcon />}
          onClick={handleSave}
          sx={{
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: 'primary.dark' },
            fontWeight: 700,
          }}
        >
          Apply
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<RestartAltIcon />}
          onClick={handleReset}
          sx={{ fontWeight: 700 }}
        >
          Reset
        </Button>
      </Box>

      <Snackbar
        open={saved}
        autoHideDuration={2000}
        onClose={() => setSaved(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ fontSize: 12 }}>
          Customization applied to slide {slideIndex + 1}
        </Alert>
      </Snackbar>
    </Paper>
  );
}
