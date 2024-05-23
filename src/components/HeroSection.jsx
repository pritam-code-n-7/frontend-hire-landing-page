import {
  Typography,
  List,
  ListItem,
  TextField,
  Button,
  styled,
  Card,
  CardContent,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DOMPurify from "dompurify";

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& > *": {
    margin: "8px", // Adjust margin as needed
  },
  "@media (max-width: 600px)": {
    display: "none", // Hide the component for screens with a width less than or equal to 600px (adjust as needed)
  },
});

const ListWithTick = styled("div")({
  display: "flex",
  alignItems: "center",
  "& svg": {
    marginRight: "8px",
    color: "yellow",
  },
});

const sanitizeHTML = (html) => {
  return DOMPurify.sanitize(html);
};

const HeroSection = () => {
  return (
    <Card sx={{ maxWidth: 500, margin: "auto", height: 520 }}>
      <CardContent>
        <StyledDiv>
          <Typography variant="body1" style={{fontFamily:"cursive"}}>
            View Course Package to Access:
          </Typography>
          <List>
            {[
              "Our Syllabus",
              "Frontend Skills",
              "How Our Work Exp Work",
              "Why 94.3% of our students get interviews or job offers within 3 weeks",
              "Get free job help",
            ].map((text, index) => (
              <ListItem key={index}>
                <ListWithTick>
                  <CheckCircleIcon />
                  {sanitizeHTML(text)}
                </ListWithTick>
              </ListItem>
            ))}
          </List>
          {/* Adjusted input fields */}
          <TextField
            fullWidth
            type="email"
            placeholder="Email"
            variant="outlined"
            required
          />
          {/* Adjusted input fields */}
          <TextField
            fullWidth
            type="password"
            placeholder="Password"
            variant="outlined"
            inputProps={{ maxLength: 10 }}
          />
          {/* Adjusted button size */}
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "blueviolet", height: "50px", marginTop: "8px" }}
          >
            SIGN UP
          </Button>
        </StyledDiv>
      </CardContent>
    </Card>
  );
};

export default HeroSection;
