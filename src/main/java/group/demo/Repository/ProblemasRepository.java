package group.demo.Repository;

import group.demo.Entity.ProblemasEntity;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
@Transactional
public interface ProblemasRepository extends JpaRepository<ProblemasEntity, Integer> {
}
