import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Centroformacion } from "../../centroformacion/entities/Centroformacion.entity";

@Entity("municipios", { schema: "public" })
export class Municipios {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

  @Column("character varying", { name: "departamento", length: 100 })
  departamento: string;

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

  @OneToMany(
    () => Centroformacion,
    (centroformacion) => centroformacion.idMunicipio
  )
  centroformacions: Centroformacion[];
}
