import React, { Component } from "react";
import Header from "./components/shared/header";
import Modal from "./components/shared/modal";

class App extends Component {

    constructor() {
        super()
        this.closeModal = this.closeModal.bind(this);
    }

  state = {
    error: false,
    success: false,
    simple: false,
    loading: false,
    navItems: [
      { type: "routerlink", link: "/test0", title: "title0" },
      { type: "routerlink", link: "/test1", title: "title1" },
      { type: "anchor", link: "/test2", title: "title2" }
    ]
  };

  closeModal(field) {
    this.setState({ [field]: false })
  }

  render() {
    return (
      <div>
        <Header title="Template" navItems={this.state.navItems} />
        <div className="container">
          <div className="row">
            <div className="grid-item-2">
                <button onClick={() => this.setState({ simple: !this.state.simple })}>
                Toggle simple
                </button>
                <Modal
                showing={this.state.simple}
                close={() => this.closeModal('simple')}
                >
                    <span>Simple Message</span>
                </Modal>
            </div>            
            <div className="grid-item-2">
                <button onClick={() => this.setState({ success: !this.state.success })}>
                Toggle success
                </button>
                <Modal
                type="success"
                showing={this.state.success}
                close={() => this.closeModal('success')}
                >
                    <span>Success Message</span>
                </Modal>                
            </div>            
            <div className="grid-item-2">
                <button onClick={() => this.setState({ error: !this.state.error })}>
                Toggle error
                </button>
                <Modal
                type="error"
                showing={this.state.error}
                close={() => this.closeModal('error')}
                >
                    <span>Error Message</span>
                </Modal>                
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
