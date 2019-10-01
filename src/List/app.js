import React, { Component } from "react";
import {
  Input,
  Footer,
  Card,
  CardBody,
  CardTitle,
  
} from 'mdbreact';


import "../assets/css/app.css";

import contributorList from "../contributors/CONTRIBUTOR.json";

class App extends Component {
  state = {
    search: ""
  };

  renderContributor = contributor => {
    

    /*if( search !== "" && contributor.name.toLowerCase().indexOf( search.toLowerCase() ) === -1 ){
        return null
    }*/

    return (
      <div className="col-md-3" style={{ marginTop: "40px",   }}>
        <Card>
          <CardBody>
            <p >
              Hello I'm
            </p>
            <CardTitle  title={contributor.name}>
              <p style={{color:'red'}}>{contributor.name.substring(0, 100)}
              {contributor.name.length > 100 && "..."}
              </p>
            </CardTitle>
            <p>
              From
            </p>
            <p ><h5>
            <p style={{color:'blue'}}>{contributor.city.substring(0, 100)}
              {contributor.city.length > 100 && "..."}
              </p>
           </h5> </p>
            
          </CardBody>
        </Card>
      </div>
    );
  };

  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredContributor = contributorList.filter(contributor => {
      return contributor.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="flyout">
        <main style={{ width: '100%',marginTop: "4rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <center>
                  <h3>
                    <a
                      href="https://github.com/bedeljani"
                      target="_blank"
                    >
                      Hacktoberfest #2k19 :)
                    </a>
                  </h3>
                </center>
              </div>
              <div className="col-12">
                <div className="col">
                <label>Search Name</label>
                <Input
                  icon="search"
                  onChange={this.onchange}
                />
                </div>
              </div>
              <div className="col" />
            </div>
            <div style={{paddingBottom: 20}} className="row">
              {filteredContributor.map(contributor => {
                return this.renderContributor(contributor);
              })}
            </div>
          </div>
        </main>
        <Footer >
          <p style={{color: 'red'}} className="footer-copyright mb-0">
            &copy; {new Date().getFullYear()} Copyright
          </p>
        </Footer>
      </div>
    );
  }
}

export default App;
