import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Titulados } from "../../titulados/entities/Titulados.entity";
import { Usuarios } from "../../usuarios/entities/Usuarios.entity";

@Entity("fichas_formacion", { schema: "public" })
export class FichasFormacion {
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

  @ManyToOne(() => Titulados, (titulados) => titulados.fichasFormacions)
  @JoinColumn([{ name: "id_titulado", referencedColumnName: "id" }])
  idTitulado: Titulados;

  @OneToOne(() => Usuarios, (usuarios) => usuarios.idFicha2)
  usuarios: Usuarios;
}
