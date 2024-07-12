export class Letter
{
    tibetan: string
    amdo: string
    wylie: string

    constructor(tibetan: string, amdo: string, wylie: string)
    {
        this.tibetan = tibetan
        this.amdo = amdo
        this.wylie = wylie
    }
}

export function letter(tibetan: string, amdo: string, wylie: string)
{
    return new Letter(tibetan, amdo, wylie)
}
