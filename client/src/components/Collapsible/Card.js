import React from 'react'
import './card.css'



function Card (props) {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }

    return (
        <div className="container">
 <button type="button" className="collapsible">{props.name}</button>
<div className="content">
  <p>{props.description}</p>
</div>
    </div>
    );
}

export default Card;