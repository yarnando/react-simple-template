import React, { Component } from "react";
import Header from "./components/shared/header";
import Modal from "./components/shared/modal";
import Loading from "./components/shared/loading";
import Card from "./components/shared/card";

class App extends Component {
    constructor() {
        super();
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
        this.setState({ [field]: false });
    }

    render() {
        return (
            <div>
                <Header title="Template" navItems={this.state.navItems} />
                <div className="container">
                    <div className="row">
                        <div className="grid-item-2">
                            <button
                                onClick={() => this.setState({ simple: !this.state.simple })}
                            >
                                Toggle simple
                            </button>
                            <Modal
                                showing={this.state.simple}
                                close={() => this.closeModal("simple")}
                            >
                                <span>Simple Message</span>
                            </Modal>
                        </div>
                        <div className="grid-item-2">
                            <button
                                onClick={() => this.setState({ success: !this.state.success })}
                            >
                                Toggle success
                            </button>
                            <Modal
                                type="success"
                                showing={this.state.success}
                                close={() => this.closeModal("success")}
                            >
                                <span>Success Message</span>
                            </Modal>
                        </div>
                        <div className="grid-item-2">
                            <button
                                onClick={() => this.setState({ error: !this.state.error })}
                            >
                                Toggle error
                            </button>
                            <Modal
                                type="error"
                                showing={this.state.error}
                                close={() => this.closeModal("error")}
                            >
                                <span>Error Message</span>
                            </Modal>
                        </div>
                    </div>

                    <div className="row">
                        <form action="">
                            <div className="row">
                                <div className="grid-item-1">
                                    <div className="input-box">
                                        <label htmlFor="">
                                            labelzãaaaaaaaoooooooooooooooooooooooooooooooo
                                        </label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="grid-item-1">
                                    <div className="input-box">
                                        <label htmlFor="">labelzãaaaaaaaooooo</label>
                                        <select name="" id="">
                                            <option value="">a</option>
                                            <option value="">b</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="grid-item-1">
                                    <div className="input-box">
                                        <label htmlFor="">labelzãaaaaaaaooooo</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="grid-item-1">
                                    <div className="input-box">
                                        <label htmlFor="">labelzãaaaaaaaooooo</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="grid-item-1">
                                    <div className="input-box">
                                        <label htmlFor="">labelzãaaaaaaaooooo</label>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="grid-item-1">
                                    <div className="input-box">
                                        <label htmlFor="">labelzãaaaaaaaooooo</label>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className="row align-center">
                                <div className="grid-item-2">
                                <button>Normal</button>
                                    <button className="primary">Primary</button>
                                </div>
                                <div className="grid-item-2">
                                    <button className="success">Success</button>
                                    <button className="danger">Danger</button>
                                </div>
                                <div className="grid-item-2">
                                    Loading... <Loading loading={true} size={18} />
                                </div>                                
                            </div>
                        </form>
                    </div>

                    <div className="row">
                        <div className="grid-item-6">
                            <Card
                                withHeader={
                                    <div className="row align-center">
                                        <div className="grid-item-3">Header</div>
                                        <div className="grid-item-3 content-end">
                                            <button>Go back</button>
                                        </div>
                                    </div>
                                }
                                withFooter={
                                    <div className="row">
                                        <div className="grid-item-6">Footer</div>
                                    </div>
                                }
                            >
                                <div className="row">
                                    <div className="grid-item-6">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Dolores distinctio ab quaerat dolor, delectus doloribus
                                    architecto facilis, quisquam non suscipit pariatur fuga
                                    repellendus eveniet quasi harum error adipisci, hic placeat.                                        
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
