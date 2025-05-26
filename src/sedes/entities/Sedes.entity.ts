import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Centroformacion } from "../../centroformacion/entities/Centroformacion.entity";

@Entity("sedes", { schema: "public" })
export class Sedes {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Column("character varying", {
    name: "ubicacion",
    nullable: true,
    length: 150,
  })
  ubicacion: string | null;

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

  @ManyToOne(() => Centroformacion, (centroformacion) => centroformacion.sedes)
  @JoinColumn([{ name: "id_centro_formacion", referencedColumnName: "id" }])
  idCentroFormacion: Centroformacion;
}
