import React, { Component } from 'react'

export default class profil extends Component {
    render() {
        return (
 
  <div className="content-wrapper">
    <section className="content-header">
      <h1>Mon profil</h1>
      <ol className="breadcrumb">
        <li className="active">Mes informations</li>
      </ol>
    </section>
    {/* Main content */}
    <section className="content">
      <div className="row">
        <div className="col-md-6">
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Informations personnelles</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td> <span className="badge bg-yellow">Code MASSAR</span></td>
                    <td>15151515</td>
                    
                  </tr>
                  <tr>
                    <td> <span className="badge bg-yellow">CIN</span></td>
                    <td>JI101010</td>
                    
                  </tr>
                  <tr>
                    <td><span className="badge bg-yellow">Nom et prénom</span></td>
                    <td>EL GARDA Hafsa</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-yellow">Adresse</span></td>
                    <td>N 100 lot hhhh Casablanca</td>
                  </tr>

                  <tr>
                    <td><span className="badge bg-yellow">Téléphone</span></td>
                    <td>0606060681</td>
                  </tr>

                  <tr>
                    <td><span className="badge bg-yellow">Email</span></td>
                    <td>hafsa@gmail.com</td>
                  </tr>

                </tbody></table>
            </div>
           
          </div>





          {/* /.box */}
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">baccalauréat</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body no-padding">
              <table className="table table-condensed">
                <tbody>
                  <tr>
                    <td><span className="badge bg-green">Type du bac</span></td>
                    <td>science physique</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-green">Année du bac</span></td>
                    <td>2015</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-green">Mention du bac</span></td>
                    <td>Bien</td>
                  </tr>
                  <tr>
                    <td><span className="badge bg-green">Etablissment</span></td>
                    <td>Lycée alquods</td>
                  </tr>
                </tbody></table>
            </div>
          </div>
        </div>


        <div className="col-md-6">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Informations des parents</h3>
              
            </div>
            {/* /.box-header */}
            <div className="box-body no-padding">
              <table className="table">
                <tbody>
                  <tr>
                    <td><span className="badge bg-blue">Nom du pére</span></td>
                    <td>Ahmed EL GARDA</td>
                    </tr>

                    <tr>
                    <td><span className="badge bg-blue">Profession du pére</span></td>
                    <td>Professeur</td>
                    </tr>
                    

                    <tr>
                    <td><span className="badge bg-blue">Nom de la mère</span></td>
                    <td>Hakima KARIMI</td>
                    </tr>


                    <tr>
                    <td><span className="badge bg-blue">Profession de la mère</span></td>
                    <td>Sans activitée</td>
                    </tr>

                    
                    <tr>
                    <td><span className="badge bg-blue">Adresse des parents</span></td>
                    <td>N 50 lot massira marrakech</td>
                    </tr>
                  
                 
                </tbody></table>
            </div>
            {/* /.box-body */}
          </div>
          {/* /.box */}
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Diplomes obtenus</h3>
            </div>
            {/* /.box-header */}
            <div className="box-body no-padding">
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td><span className="badge bg-light-pink">Type du diplome</span></td>
                    <td>DUT</td>
                    </tr>
                  <tr>
                    <td><span className="badge bg-light-pink">Option</span></td>
                    <td>Génie informatique</td>
                   </tr>
                  <tr>
                    <td><span className="badge bg-light-pink">Mention</span></td>
                    <td>Bien</td>
                    </tr>

                  <tr>
                    <td><span className="badge bg-light-pink">Année d'obtention</span></td>
                    <td>2018</td>
                   </tr>

                   <tr>
                    <td><span className="badge bg-light-pink">Etablissment</span></td>
                    <td>EST SAFI</td>
                   </tr>

                </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

        )
    }
}
