package org.example.projectlibrioo.Repository;

import org.example.projectlibrioo.Model.RobotMaintenance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RobotMaintainRepo extends JpaRepository<RobotMaintenance, Integer> {

}
