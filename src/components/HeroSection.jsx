
import { Typography, List, ListItem, TextField, Button, styled, Card, CardContent, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DOMPurify from 'dompurify'; // Import dompurify

const StyledDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& > *': {
    margin: '8px', // Adjust margin as needed
  },
  '@media (max-width: 600px)': {
    display: 'none', // Hide the component for screens with a width less than or equal to 600px (adjust as needed)
  },
});

const ListWithTick = styled('div')({
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    marginRight: '8px',
    color: 'yellow',
  },
});

const sanitizeHTML = (html) => {
  return DOMPurify.sanitize(html);
};

const HeroSection = () => {
  return (
    <Card sx={{ maxWidth: 500, margin: 'auto', height: 500 }}>
      <CardContent>
        <StyledDiv>
          <Typography variant="body1">View Course Package to Access:</Typography>
          <List>
            {[
              'Our Syllabus',
              'Frontend Skills',
              'How Our Work Exp Work',
              'Why 94.3% of our students get interviews or job offers within 3 weeks',
              'Get free job help',
            ].map((text, index) => (
              <ListItem key={index}>
                <ListWithTick>
                  <CheckCircleIcon />
                  {/* Sanitize user-generated content */}
                  {sanitizeHTML(text)}
                </ListWithTick>
              </ListItem>
            ))}
          </List>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="text" placeholder="First Name" variant="outlined" inputProps={{ maxLength: 10 }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="email" placeholder="Email" variant="outlined" required />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" sx={{ bgcolor: 'blueviolet' }}>SIGN UP</Button>
            </Grid>
          </Grid>
        </StyledDiv>
      </CardContent>
    </Card>
  );
};

export default HeroSection;
