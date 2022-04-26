// Code Keypad Component Here

function Keypad(){
    function HandleChange(event){
        console.log("Entering password...")

    }
    return (
        <input type="password"
        onChange={HandleChange}
        
        />
    )
}

export default Keypad