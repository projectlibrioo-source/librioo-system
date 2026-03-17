package org.example.projectlibrioo.Repository;

import org.example.projectlibrioo.Model.Robot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface RobotRepo extends JpaRepository<Robot, Integer> {

    @Query("SELECT r FROM Robot r WHERE r.robotID = :robotID OR r.robotName = :robotName")
    Robot findRobotsByKeyword(@Param("robotID") Integer robotID, @Param("robotName") String robotName);
    Optional<Robot> findByRobotName(String robotName);
    List<Robot> findByStatus(String status);
    boolean existsByRobotName(String robotName);
    long countByStatus(String status); // ACTIVE robots

}
