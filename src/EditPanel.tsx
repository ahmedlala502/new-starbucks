import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SaveIcon from '@mui/icons-material/Save';
import RestoreIcon from '@mui/icons-material/Restore';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import { presentationData } from './data/presentationData';

type PresentationDataType = typeof presentationData;

const STORAGE_KEY = 'sbksa_edited_data';

function loadData(): PresentationDataType {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as PresentationDataType;
  } catch (_) { /* ignore */ }
  return presentationData;
}

function saveData(data: PresentationDataType) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  Object.assign(presentationData, data);
}

export default function EditPanel() {
  const [data, setData] = useState<PresentationDataType>(() => loadData());
  const [saved, setSaved] = useState(false);

  const update = <K extends keyof PresentationDataType>(key: K, value: PresentationDataType[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const updateNum = (key: keyof PresentationDataType, raw: string) => {
    const n = parseInt(raw, 10);
    if (!isNaN(n)) update(key, n as PresentationDataType[typeof key]);
  };

  const updateMonthly = (index: number, field: 'month' | 'activations', value: string) => {
    const updated = data.monthlyActivations.map((m, i) =>
      i === index ? { ...m, [field]: field === 'activations' ? parseInt(value, 10) || 0 : value } : m
    );
    update('monthlyActivations', updated);
  };

  const updateCity = (index: number, field: 'name' | 'activations', value: string) => {
    const updated = data.topCities.map((c, i) =>
      i === index ? { ...c, [field]: field === 'activations' ? parseInt(value, 10) || 0 : value } : c
    );
    update('topCities', updated);
  };

  const updateBranch = (index: number, field: 'name' | 'city' | 'activations', value: string) => {
    const updated = data.topBranches.map((b, i) =>
      i === index ? { ...b, [field]: field === 'activations' ? parseInt(value, 10) || 0 : value } : b
    );
    update('topBranches', updated);
  };

  const handleSave = () => {
    saveData(data);
    setSaved(true);
  };

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    Object.assign(presentationData, presentationData);
    setData({ ...presentationData });
    setSaved(true);
  };

  const fieldSx = { mb: 1.5 };
  const inputSx = { '& .MuiInputBase-input': { fontSize: 12 }, '& .MuiInputLabel-root': { fontSize: 12 } };

  return (
    <Box sx={{ p: 2 }}>
      {/* Core Metrics */}
      <Accordion disableGutters defaultExpanded sx={{ boxShadow: 'none', border: '1px solid', borderColor: 'divider', borderRadius: '8px!important', mb: 1.5, '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ minHeight: 40, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Typography variant="caption" fontWeight={700} textTransform="uppercase" letterSpacing={0.5} color="text.secondary">
            Core Metrics
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 0 }}>
          {([
            ['totalInfluencers', 'Total Influencers'],
            ['uniqueInfluencers', 'Unique Influencers'],
            ['totalContent', 'Total Content Records'],
            ['totalBranches', 'Total Branches'],
            ['cities', 'Cities'],
            ['governorates', 'Governorates'],
            ['activeMonths', 'Active Months'],
            ['campaigns', 'Campaigns'],
          ] as [keyof PresentationDataType, string][]).map(([key, label]) => (
            <TextField
              key={key}
              label={label}
              size="small"
              fullWidth
              value={data[key]}
              onChange={(e) => updateNum(key, e.target.value)}
              sx={{ ...fieldSx, ...inputSx }}
            />
          ))}
          <TextField
            label="Total Views"
            size="small"
            fullWidth
            value={data.totalViews}
            onChange={(e) => update('totalViews', e.target.value)}
            sx={{ ...fieldSx, ...inputSx }}
          />
          <TextField
            label="Total Saves"
            size="small"
            fullWidth
            value={data.totalSaves}
            onChange={(e) => update('totalSaves', e.target.value)}
            sx={{ ...fieldSx, ...inputSx }}
          />
          <TextField
            label="Total Likes"
            size="small"
            fullWidth
            value={data.totalLikes}
            onChange={(e) => update('totalLikes', e.target.value)}
            sx={{ ...fieldSx, ...inputSx }}
          />
          <TextField
            label="Total Comments"
            size="small"
            fullWidth
            value={data.totalComments}
            onChange={(e) => update('totalComments', e.target.value)}
            sx={{ ...fieldSx, ...inputSx }}
          />
          <TextField
            label="Total Followers"
            size="small"
            fullWidth
            value={data.totalFollowers}
            onChange={(e) => update('totalFollowers', e.target.value)}
            sx={{ ...fieldSx, ...inputSx }}
          />
        </AccordionDetails>
      </Accordion>

      {/* Monthly Activations */}
      <Accordion disableGutters sx={{ boxShadow: 'none', border: '1px solid', borderColor: 'divider', borderRadius: '8px!important', mb: 1.5, '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ minHeight: 40, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Typography variant="caption" fontWeight={700} textTransform="uppercase" letterSpacing={0.5} color="text.secondary">
            Monthly Activations
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 0 }}>
          {data.monthlyActivations.map((m, i) => (
            <Box key={i} sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <TextField
                label="Month"
                size="small"
                value={m.month}
                onChange={(e) => updateMonthly(i, 'month', e.target.value)}
                sx={{ width: 72, ...inputSx }}
              />
              <TextField
                label="Activations"
                size="small"
                type="number"
                value={m.activations}
                onChange={(e) => updateMonthly(i, 'activations', e.target.value)}
                sx={{ flex: 1, ...inputSx }}
              />
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Top Cities */}
      <Accordion disableGutters sx={{ boxShadow: 'none', border: '1px solid', borderColor: 'divider', borderRadius: '8px!important', mb: 1.5, '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ minHeight: 40, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Typography variant="caption" fontWeight={700} textTransform="uppercase" letterSpacing={0.5} color="text.secondary">
            Top Cities
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 0 }}>
          {data.topCities.map((c, i) => (
            <Box key={i} sx={{ mb: 1 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  label="City"
                  size="small"
                  value={c.name}
                  onChange={(e) => updateCity(i, 'name', e.target.value)}
                  sx={{ flex: 1, ...inputSx }}
                />
                <TextField
                  label="Activations"
                  size="small"
                  type="number"
                  value={c.activations}
                  onChange={(e) => updateCity(i, 'activations', e.target.value)}
                  sx={{ width: 100, ...inputSx }}
                />
              </Box>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Top Branches */}
      <Accordion disableGutters sx={{ boxShadow: 'none', border: '1px solid', borderColor: 'divider', borderRadius: '8px!important', mb: 1.5, '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ minHeight: 40, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Typography variant="caption" fontWeight={700} textTransform="uppercase" letterSpacing={0.5} color="text.secondary">
            Top Branches
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 0 }}>
          {data.topBranches.map((b, i) => (
            <Box key={i} sx={{ mb: 1.5, pb: 1.5, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Typography variant="caption" color="text.disabled" fontWeight={700} display="block" mb={0.5}>
                Branch #{i + 1}
              </Typography>
              <TextField
                label="Branch Name"
                size="small"
                fullWidth
                value={b.name}
                onChange={(e) => updateBranch(i, 'name', e.target.value)}
                sx={{ ...fieldSx, ...inputSx }}
              />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  label="City"
                  size="small"
                  value={b.city}
                  onChange={(e) => updateBranch(i, 'city', e.target.value)}
                  sx={{ flex: 1, ...inputSx }}
                />
                <TextField
                  label="Activations"
                  size="small"
                  type="number"
                  value={b.activations}
                  onChange={(e) => updateBranch(i, 'activations', e.target.value)}
                  sx={{ width: 100, ...inputSx }}
                />
              </Box>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      <Divider sx={{ my: 2 }} />

      {/* Platform Stats */}
      <Accordion disableGutters sx={{ boxShadow: 'none', border: '1px solid', borderColor: 'divider', borderRadius: '8px!important', mb: 1.5, '&:before': { display: 'none' } }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: 16 }} />} sx={{ minHeight: 40, '& .MuiAccordionSummary-content': { my: 0.5 } }}>
          <Typography variant="caption" fontWeight={700} textTransform="uppercase" letterSpacing={0.5} color="text.secondary">
            Platform Stats
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 0 }}>
          {(['instagram', 'tiktok', 'snapchat'] as const).map((platform) => (
            <Box key={platform} sx={{ mb: 2 }}>
              <Typography variant="caption" fontWeight={800} textTransform="capitalize" color="text.primary" display="block" mb={0.75}>
                {platform}
              </Typography>
              <TextField
                label="Unique Influencers"
                size="small"
                fullWidth
                type="number"
                value={data.platforms[platform].uniqueInfluencers}
                onChange={(e) => {
                  const n = parseInt(e.target.value, 10) || 0;
                  update('platforms', {
                    ...data.platforms,
                    [platform]: { ...data.platforms[platform], uniqueInfluencers: n },
                  });
                }}
                sx={{ ...fieldSx, ...inputSx }}
              />
              <TextField
                label="Total Content"
                size="small"
                fullWidth
                type="number"
                value={data.platforms[platform].totalContent}
                onChange={(e) => {
                  const n = parseInt(e.target.value, 10) || 0;
                  update('platforms', {
                    ...data.platforms,
                    [platform]: { ...data.platforms[platform], totalContent: n },
                  });
                }}
                sx={{ ...fieldSx, ...inputSx }}
              />
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Save / Reset */}
      <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
        <Button
          fullWidth
          variant="contained"
          size="small"
          startIcon={<SaveIcon />}
          onClick={handleSave}
          sx={{
            bgcolor: '#00704A',
            '&:hover': { bgcolor: '#005f3e' },
            textTransform: 'none',
            fontWeight: 700,
            borderRadius: 2,
          }}
        >
          Save Changes
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<RestoreIcon />}
          onClick={handleReset}
          sx={{
            textTransform: 'none',
            fontWeight: 700,
            borderRadius: 2,
            borderColor: 'divider',
            color: 'text.secondary',
          }}
        >
          Reset
        </Button>
      </Box>

      <Typography variant="caption" color="text.disabled" mt={1.5} display="block" textAlign="center">
        Changes are saved to localStorage and reflected in all slides instantly.
      </Typography>

      <Snackbar
        open={saved}
        autoHideDuration={2000}
        onClose={() => setSaved(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ fontSize: 12 }}>
          Changes applied successfully
        </Alert>
      </Snackbar>
    </Box>
  );
}
