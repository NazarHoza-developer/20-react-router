

function PublickPage(props){
    // console.log(props);
   
    return(<div className="publick">
        <p>{props.author.name}</p>
        <p>{props.author.nickname}</p>
        <img src={props.author.photo} alt="Author"></img>
        <p>{props.content}</p>
        <img src={props.image} alt="Post"></img>
        <p>{props.date}</p>
    </div>
    );
}
export {PublickPage}