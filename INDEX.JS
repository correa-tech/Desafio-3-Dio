class heroi{
    constructor(nome, age, tipo){
        this.nome = nome
        this.age = age
        this.tipo = tipo
    }

    atacar(){
        const ataques = {
            Guerreiro: "espada",
            Mago: "magia",
            Monge: "vento",
            Ninja: "katana",
        };
        const ataque = ataques[this.tipo] || "Dado indisponível";
        console.log(`O ${this.tipo} ${this.nome} atacou usando: ${ataque}!`)
    }
}

let Heroi1 = new heroi ("Guga", "19", "Mago")
Heroi1.atacar();

