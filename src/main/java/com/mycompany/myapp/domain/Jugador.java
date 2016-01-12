package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import java.time.LocalDate;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Jugador.
 */
@Entity
@Table(name = "jugador")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Jugador implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;

    @Column(name = "canastas_totales")
    private Integer canastasTotales;

    @Column(name = "rebotes_totales")
    private Integer rebotesTotales;

    @Column(name = "asistencias_totales")
    private Integer asistenciasTotales;

    @Column(name = "posicion")
    private String posicion;

    @ManyToOne
    @JoinColumn(name = "jugador_id")
    private Jugador jugador;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public Integer getCanastasTotales() {
        return canastasTotales;
    }

    public void setCanastasTotales(Integer canastasTotales) {
        this.canastasTotales = canastasTotales;
    }

    public Integer getRebotesTotales() {
        return rebotesTotales;
    }

    public void setRebotesTotales(Integer rebotesTotales) {
        this.rebotesTotales = rebotesTotales;
    }

    public Integer getAsistenciasTotales() {
        return asistenciasTotales;
    }

    public void setAsistenciasTotales(Integer asistenciasTotales) {
        this.asistenciasTotales = asistenciasTotales;
    }

    public String getPosicion() {
        return posicion;
    }

    public void setPosicion(String posicion) {
        this.posicion = posicion;
    }

    public Jugador getJugador() {
        return jugador;
    }

    public void setJugador(Jugador jugador) {
        this.jugador = jugador;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Jugador jugador = (Jugador) o;
        return Objects.equals(id, jugador.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Jugador{" +
            "id=" + id +
            ", nombre='" + nombre + "'" +
            ", fechaNacimiento='" + fechaNacimiento + "'" +
            ", canastasTotales='" + canastasTotales + "'" +
            ", rebotesTotales='" + rebotesTotales + "'" +
            ", asistenciasTotales='" + asistenciasTotales + "'" +
            ", posicion='" + posicion + "'" +
            '}';
    }
}
