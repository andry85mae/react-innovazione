

export class Car
{

    public Name:string;
    public Marca:string;
    public Targa:string;
    public KM:number;
    public Id:number;
    public image:any;

    constructor(initialData?:any){
            if(initialData)
            {
                this.Name=initialData.Name;
                this.Marca=initialData.Marca;
                this.Targa=initialData.Targa;
                this.KM=initialData.KM;
                this.Id=initialData.Id;
                this.image=initialData.image;
            }
    }
}