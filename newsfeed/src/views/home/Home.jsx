import { React, Component } from 'react';
import { get } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getHeadlinesFromDataNewsApi } from '../../services/dataNewsService/dataNewsService';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: []
        }
    };

    setHeadlinesToState() {
       return getHeadlinesFromDataNewsApi()
        .then(response => {
            const headlines = get(response, 'data.hits')
            this.setState({
                headlines,
            })
        });
    }

    componentDidMount() {
        this.setHeadlinesToState()
    }
    
    render() {
        const headlinesList = this.state.headlines;

       
      return (
        <div>
          <h1>Newsfeed</h1>
          <h2>Top Headlines</h2>
          {headlinesList.map((headline) => (
            <h2>{headline.title}</h2>
            ))}
        </div>
      );
    }
  };

export default Home;