import { React, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getHeadlinesFromDataNewsApi } from '../../services/dataNewsService';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = []
    }

    componentDidMount() {
        console.log(getHeadlinesFromDataNewsApi);
        //.then(response => {this.setState = response.data.hits})
    }

    render() {
        const useStyles = makeStyles((theme) => ({
            formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            },
            selectEmpty: {
            marginTop: theme.spacing(2),
            },
        }));

        function SimpleSelect() {
            const classes = useStyles();
            const [age, setAge] = React.useState('');
        
            const handleChange = (event) => {
            setAge(event.target.value);
            };

        };
        
        // classes.formControl
      return (
        <div>
          <h1>Newsfeed</h1>
          <FormControl className={null}> 
            <InputLabel id="demo-simple-select-helper-label">News Headlines</InputLabel>
            <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={2} //age
            onChange={null} //handlechange
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>Select an article</FormHelperText>
        </FormControl>
        </div>
      );
    }
  };

export default Home;