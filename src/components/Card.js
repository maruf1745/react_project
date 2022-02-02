const Card = (props) =>{
    const {cardHeader,cardBody,cardFooter} =props;
    return(
        <>
            
            <div className="card">
                <div className="card-header">{cardHeader}</div>
                <div className="card-body">{cardBody}</div> 
                <div className="card-footer">{cardFooter}</div>
            </div>
               
            
        </ >
    )
};
export default Card;