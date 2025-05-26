import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accesos } from "../../accesos/entities/Accesos.entity";

@Entity("opciones", { schema: "public" })
export class Opciones {
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

  @OneToMany(() => Accesos, (accesos) => accesos.idOpcion)
  accesos: Accesos[];
}
