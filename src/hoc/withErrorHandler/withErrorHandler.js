
import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../_Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount () {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        // Removing interceptors after the component is unmonted to avoid 'zombies' interceptors causing memory leak
        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }
        
        errorConfirmedHandler = () => {
            this.setState({error:null})
        }

        render () {
            return(
            <Aux>
                <Modal 
                    show={this.state.error}
                    modalClose={this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
            </Aux>
            )
        }
    }
}

export default withErrorHandler;