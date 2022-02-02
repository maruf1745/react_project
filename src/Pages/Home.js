import Card from "../components/Card";

const Home = () =>{
    return(
        <>
            <h1>This is Home Page........</h1>
            <div className="container">
                <div className="row">
                    <div className="col-4"><Card cardHeader="Header 1" cardBody="Card Body 1" cardFooter="Card Footer 1" /></div>
                    <div className="col-4"><Card cardHeader="Header 2" cardBody="Card Body 2" cardFooter="Card Footer 2" /></div>
                    <div className="col-4"><Card cardHeader="Header 3" cardBody="Card Body 3" cardFooter="Card Footer 3" /></div>
                </div>
            </div>
            
        </ >
    )
};
export default Home;