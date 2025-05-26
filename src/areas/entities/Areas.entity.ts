import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Sitio } from "../../sitio/entities/Sitio.entity";
import { Centroformacion } from "../../centroformacion/entities/Centroformacion.entity";
import { Productos } from "../../productos/entities/Productos.entity";
import { Usuarios } from "../../usuarios/entities/Usuarios.entity";

@Entity("areas", { schema: "public" })
export class Areas {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nombre_area", length: 100 })
  nombreArea: string;

  @Column("integer", { name: "id_bodega", nullable: true })
  idBodega: number | null;

  @Column("timestamp without time zone", {
    name: "fecha_creacion",
    nullable: true,
    default: () => "now()",
  })
  fechaCreacion: Date | null;

  @Column("timestamp without time zone", {
    name: "fecha_finalizacion",
    nullable: true,
  })
  fechaFinalizacion: Date | null;

  @ManyToOne(() => Sitio, (sitio) => sitio.areas)
  @JoinColumn([{ name: "fk_sitio", referencedColumnName: "id" }])
  fkSitio: Sitio;

  @ManyToOne(() => Centroformacion, (centroformacion) => centroformacion.areas)
  @JoinColumn([{ name: "id_centro_formacion", referencedColumnName: "id" }])
  idCentroFormacion: Centroformacion;

  @OneToMany(() => Productos, (productos) => productos.idArea)
  productos: Productos[];

  @OneToMany(() => Usuarios, (usuarios) => usuarios.idArea)
  usuarios: Usuarios[];
}
