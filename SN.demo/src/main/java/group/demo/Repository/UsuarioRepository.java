package group.demo.Repository;

import group.demo.Entity.UsuariosEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
@Transactional
public interface UsuarioRepository extends JpaRepository<UsuariosEntity, Integer> {
}
