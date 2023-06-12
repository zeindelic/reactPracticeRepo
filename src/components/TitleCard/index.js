import React from "react";
import './titleCard.css';

const TitleCard = ({title, description}) => {
return(
    <div className="titleCard">
<h1>{title}</h1>
<p>{description}</p>
</div>
)


}

export default TitleCard
