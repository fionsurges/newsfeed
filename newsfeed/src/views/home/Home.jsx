import { React, Component } from 'react';
import { get } from 'lodash';
import { styled } from 'styletron-react';

import { getHeadlinesFromDataNewsApi } from '../../services/dataNewsService/dataNewsService';
import ArticleCard from '../articles/ArticleCard';
import Header from '../header/Header';


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
        console.log(headlinesList);

        const StyledComponent = styled('div', ({
            display: 'flex',
            height: '100vh',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }
        ));
    
        return (
            <div>
                <Header />
                <h2>Top Headlines</h2>
                <StyledComponent>
                    {headlinesList.map((headline) => (
                    <ArticleCard 
                        title={headline.title}
                        content={headline.content}
                        link={headline.url}
                        imageUrl={headline.imageUrl}
                    />
                    ))}
                </StyledComponent>
             </div>
        );
    }
  };

export default Home;