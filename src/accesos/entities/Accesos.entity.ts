import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Opciones } from "../../opciones/entities/Opciones.entity";
import { Roles } from "../../roles/entities/Roles.entity";

@Entity("accesos", { schema: "public" })
export class Accesos {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

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

  @ManyToOne(() => Opciones, (opciones) => opciones.accesos)
  @JoinColumn([{ name: "id_opcion", referencedColumnName: "id" }])
  idOpcion: Opciones;

  @ManyToOne(() => Roles, (roles) => roles.accesos)
  @JoinColumn([{ name: "id_rol", referencedColumnName: "id" }])
  idRol: Roles;
}
