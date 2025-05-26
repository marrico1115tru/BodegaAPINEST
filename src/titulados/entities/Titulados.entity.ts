import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FichasFormacion } from "../../fichas_formacion/entities/FichasFormacion.entity";

@Entity("titulados", { schema: "public" })
export class Titulados {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nombre", length: 100 })
  nombre: string;

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
    () => FichasFormacion,
    (fichasFormacion) => fichasFormacion.idTitulado
  )
  fichasFormacions: FichasFormacion[];
}
