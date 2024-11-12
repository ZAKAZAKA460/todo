const TextArea = ({ph, bgcolor, ft, br}) =>{
    return (<textarea style={{background: bgcolor, fontSize:ft, borderRadius:br}} placeholder={ph} name="" id=""
    ></textarea>);
}
export {TextArea};