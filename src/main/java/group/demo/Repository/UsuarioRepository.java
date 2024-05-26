package group.demo.Repository;

import group.demo.Entity.UsuariosEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
@Repository
@Transactional
public interface UsuarioRepository extends JpaRepository<UsuariosEntity, Integer> {
    @Query(value = "SELECT * FROM usuarios WHERE EMAIL = :idc AND CONTRASEÑA = :idco",
            nativeQuery = true)
    public UsuariosEntity findUsuario(@Param("idc") String correo, @Param("idco") String pass);




}
