import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

    
    const useStyles = makeStyles({
        root: {
          minWidth: 800,
          margin:'10px',
         
        },
        link: {
          textDecoration:'none',
        },
      });

      const Post = (props) => {
      const {id, title, body} = props.post;

      const classes = useStyles();

    
    return (
        <div>
        <Card className={classes.root} variant="outlined" >
        <CardActionArea>     
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
            <Link className={classes.link} to={`/post/${id}`}>
                <Button variant="contained" color="primary">See More </Button>
            </Link> 
      </CardActions>
    </Card>
        </div>
        
            
             
        
    );
};

export default Post;