package group.demo.Repository;

import group.demo.Entity.PostEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public interface PostRepository extends JpaRepository<PostEntity, Integer> {
    @Query(value = "SELECT v.* FROM post WHERE " +
            "    (ID_PROBLEMA = :paramProblema OR :paramProblema = '0') AND" +
            "    (NIVEL = :paramNivel OR :paramparamNivel = 0) AND" +
            "    (ID_Autonoma = :paramAu OR :paramAu = 0) AND" +
            "    (ID_localidad = :paramLoca OR :paramLoca = 0 );", nativeQuery = true )
    public List<PostEntity> filtrado(@Param("paramProblema") int planes, @Param("paramNivel") int nivel, @Param("paramAu") int au, @Param("paramLoca") int loca);

}
