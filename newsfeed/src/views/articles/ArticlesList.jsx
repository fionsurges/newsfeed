import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AnnouncementOutlinedIcon from '@material-ui/icons/AnnouncementOutlined';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function ArticlesList({title, content, link}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<AnnouncementOutlinedIcon />}
            label={title}
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            {content}
            <a href={link}> Read more</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}