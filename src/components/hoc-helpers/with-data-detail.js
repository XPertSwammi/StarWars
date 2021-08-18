import React, {Component} from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withDataDetail = (View, fields ) => {

    return class extends Component {
        state = {
            item: null,
            image: null,
            loading: true,
            false: false
          };
        updateItem() {
          const{itemId} = this.props;
            if (!itemId) {
              return;
            }
        const {getData, getImageUrl} = this.props;
           getData(itemId)
              .then((item) => {
                this.setState({
                  item,
                  image: getImageUrl(item),
                  loading:false
                });
              })
              .catch((err)=>{
                this.setState({
                  loading: false,
                  error: true
                })
              });
          }
        componentDidMount() {
           this.updateItem();
          }
        
        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId) {
              this.setState({
                loading: true
              })
              this.updateItem();
            }
          }
        render() {
            const {item, image, loading, error} = this.state;
            if(!item){
              return <span>Select item in list</span>
            }
            if(loading){
              return <Spinner/>
            }
            if(error) {
              return <ErrorIndicator/>
            }
            return(
                <View item={item} image={image}>
                    {fields}
                </View>
            )
        }
    }

}

export default withDataDetail;