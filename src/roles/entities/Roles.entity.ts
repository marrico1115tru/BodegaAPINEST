import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Accesos } from "../../accesos/entities/Accesos.entity";
import { Usuarios } from "../../usuarios/entities/Usuarios.entity";

@Entity("roles", { schema: "public" })
export class Roles {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "nombre_rol", length: 100 })
  nombreRol: string;

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

  @OneToMany(() => Accesos, (accesos) => accesos.idRol)
  accesos: Accesos[];

  @OneToMany(() => Usuarios, (usuarios) => usuarios.idRol)
  usuarios: Usuarios[];
}
