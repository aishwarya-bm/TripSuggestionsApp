import './App.css';

function TripCard(props) {
    if(props.selected === "road")
        return(
                <section className="suggested-item">
                    <div className="destination">{props.tripItem.name}</div>
                    <div>Distance : {props.tripItem.dist}</div>
                    <div>Time : {props.tripItem.time}</div>
                    <div>Highways : {props.tripItem.highways}</div>
                    <div>Best time to visit : {props.tripItem.bestmonths}</div>
                </section>
        );
    else if(props.selected === "cruise")
        return(
                <section className="suggested-item">
                    <div className="destination">{props.tripItem.name}</div>
                    <div>Location : {props.tripItem.location}</div>
                    <div>Duration : {props.tripItem.duration}</div>
                    <div>Price : {props.tripItem.price}</div>
                </section>
        );
    else if(props.selected === "famjam")
        return(
                <section className="suggested-item">
                    <div className="destination">{props.tripItem.name}</div>
                    <div>Famous food : {props.tripItem.food}</div>
                    <div>Eat at : {props.tripItem.eatAt}</div>
                </section>
        );
    else
        return(
            <section className="suggested-item">
                    <div className="destination">{props.tripItem.name}</div>
                    <div>Things to do : {props.tripItem.do}</div>
                    <div>Stay at : {props.tripItem.stay}</div>
                    <div>Budget : {props.tripItem.budget}</div>
                </section>
        )        

}

export default TripCard;
