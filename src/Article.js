import React, {Component} from 'react';

class Article extends Component{
        state={
            isOpen: true
        }

    handleClick=()=>{
        this.setState({
            isOpen: !this.state.isOpen 
        });
    }

    render(){
        const {article}=this.props;
        const body = this.state.isOpen && <section>{article.items.title}</section>
        return(
            <div>
                <h2>article.items.title
                <button onClick={this.handleClick}>close</button>
                </h2>
                {body}
            </div>

              
          )

    }
}

export default Article;