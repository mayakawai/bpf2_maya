export default function HelloWorld(){
    const propsUserCard = {
        nama: "Saint",
        nim: "999999",
        tanggal: "2025-01-01"
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard 
	            nama="Maya" 
	            nim="2455301107"
	            tanggal={new Date().toLocaleDateString()}
	          />

            <UserCard {...propsUserCard}/>

            <img src="img/bruum.jpg" alt="logo"/>
        </div>
    )
};

function GreetingBinjai(){
    return(
        <small>salam dari binjai</small>
    )
}

function QuoteText() {
    const text = "Bruuuuuuuuuum";
    const text2 = "BRUUUUUMMMM";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}