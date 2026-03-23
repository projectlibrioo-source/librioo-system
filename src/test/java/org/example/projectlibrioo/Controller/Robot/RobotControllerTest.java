package org.example.projectlibrioo.Controller.Robot;

import org.example.projectlibrioo.Model.Robot;
import org.example.projectlibrioo.Model.RobotMaintenance;
import org.example.projectlibrioo.Repository.RobotRepo;
import org.example.projectlibrioo.Service.RobotService.RobotService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class RobotControllerTest {

    @Mock
    private RobotService robotService;

    @Mock
    private RobotRepo robotRepository;

    @InjectMocks
    private RobotController robotController;

    private Robot mockRobot;
    private RobotMaintenance mockMaintenance;

    @BeforeEach
    void setUp() {
        mockRobot = new Robot();
        mockRobot.setRobotID(1);
        mockRobot.setRobotName("RoboLib-01");

        mockMaintenance = new RobotMaintenance();
    }

    // ─── HEALTH CHECK ────────────────────────────────────────────────────────

    @Test
    void test_shouldReturnOk() {
        String response = robotController.test();
        assertEquals("Robot API is working!", response);
    }

    // ─── ADD ROBOT ───────────────────────────────────────────────────────────

    @Test
    void addRobot_shouldReturnCreated_whenSaved() {
        when(robotService.existsByRobotName(mockRobot.getRobotName())).thenReturn(false);
        when(robotService.saveRobot(any(Robot.class))).thenReturn(mockRobot);

        ResponseEntity<?> response = robotController.addRobot(mockRobot);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(mockRobot, response.getBody());
    }

    @Test
    void addRobot_shouldReturnConflict_whenNameExists() {
        when(robotService.existsByRobotName(mockRobot.getRobotName())).thenReturn(true);

        ResponseEntity<?> response = robotController.addRobot(mockRobot);

        assertEquals(HttpStatus.CONFLICT, response.getStatusCode());
        assertEquals("Robot with this name already exists", response.getBody());
    }

    @Test
    void addRobot_shouldReturnBadRequest_whenSaveReturnsNull() {
        when(robotService.existsByRobotName(mockRobot.getRobotName())).thenReturn(false);
        when(robotService.saveRobot(any(Robot.class))).thenReturn(null);

        ResponseEntity<?> response = robotController.addRobot(mockRobot);

        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
    }

    // ─── GET ALL ROBOTS ──────────────────────────────────────────────────────

    @Test
    void getAllRobots_shouldReturnList_whenNotEmpty() {
        when(robotService.getAllRobots()).thenReturn(List.of(mockRobot));

        ResponseEntity<List<Robot>> response = robotController.getAllRobots();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(1, response.getBody().size());
        assertEquals("RoboLib-01", response.getBody().get(0).getRobotName());
    }

    @Test
    void getAllRobots_shouldReturnNoContent_whenEmpty() {
        when(robotService.getAllRobots()).thenReturn(List.of());

        ResponseEntity<List<Robot>> response = robotController.getAllRobots();

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
    }

    // ─── SEARCH ROBOT ────────────────────────────────────────────────────────

    @Test
    void searchRobot_shouldReturnRobot_whenFoundById() {
        when(robotService.getRobotById(1)).thenReturn(mockRobot);

        ResponseEntity<?> response = robotController.searchRobot(1, null);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockRobot, response.getBody());
    }

    @Test
    void searchRobot_shouldReturnRobot_whenFoundByName() {
        when(robotService.getRobotByName("RoboLib-01")).thenReturn(mockRobot);

        ResponseEntity<?> response = robotController.searchRobot(null, "RoboLib-01");

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockRobot, response.getBody());
    }

    @Test
    void searchRobot_shouldReturn404_whenNotFound() {
        when(robotService.getRobotById(99)).thenReturn(null);

        ResponseEntity<?> response = robotController.searchRobot(99, null);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    // ─── GET ROBOT BY ID ─────────────────────────────────────────────────────

    @Test
    void getRobotById_shouldReturnRobot_whenFound() {
        when(robotService.getRobotById(1)).thenReturn(mockRobot);

        ResponseEntity<Robot> response = robotController.getRobotById(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockRobot, response.getBody());
    }

    @Test
    void getRobotById_shouldReturn404_whenNotFound() {
        when(robotService.getRobotById(99)).thenReturn(null);

        ResponseEntity<Robot> response = robotController.getRobotById(99);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    // ─── UPDATE ROBOT ────────────────────────────────────────────────────────

    @Test
    void updateRobot_shouldReturnUpdatedRobot_whenFound() {
        when(robotService.updateRobot(any(Robot.class))).thenReturn(mockRobot);

        ResponseEntity<Robot> response = robotController.updateRobot(1, mockRobot);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockRobot, response.getBody());
    }

    @Test
    void updateRobot_shouldReturn404_whenNotFound() {
        when(robotService.updateRobot(any(Robot.class))).thenReturn(null);

        ResponseEntity<Robot> response = robotController.updateRobot(99, mockRobot);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    // ─── DELETE ROBOT ────────────────────────────────────────────────────────

    @Test
    void deleteRobot_shouldReturnOk_whenDeleted() {
        when(robotService.deleteRobot(1)).thenReturn(true);

        ResponseEntity<Map<String, String>> response = robotController.deleteRobot(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Robot deleted successfully", response.getBody().get("message"));
    }

    @Test
    void deleteRobot_shouldReturn404_whenNotFound() {
        when(robotService.deleteRobot(99)).thenReturn(false);

        ResponseEntity<Map<String, String>> response = robotController.deleteRobot(99);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("Robot not found", response.getBody().get("message"));
    }

    // ─── DELETE ROBOT BY PARAM ───────────────────────────────────────────────

    @Test
    void deleteRobotByParam_shouldReturnOk_whenDeletedById() {
        when(robotService.deleteRobot(1)).thenReturn(true);

        ResponseEntity<Map<String, String>> response = robotController.deleteRobotByParam(1, null);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Robot deleted successfully", response.getBody().get("message"));
    }

    @Test
    void deleteRobotByParam_shouldReturnOk_whenDeletedByName() {
        when(robotService.getRobotByName("RoboLib-01")).thenReturn(mockRobot);
        when(robotService.deleteRobot(1)).thenReturn(true);

        ResponseEntity<Map<String, String>> response = robotController.deleteRobotByParam(null, "RoboLib-01");

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Robot deleted successfully", response.getBody().get("message"));
    }

    @Test
    void deleteRobotByParam_shouldReturn404_whenNotFound() {
        ResponseEntity<Map<String, String>> response = robotController.deleteRobotByParam(null, null);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertEquals("Robot not found", response.getBody().get("message"));
    }

    // ─── MAINTENANCE ─────────────────────────────────────────────────────────

    @Test
    void logMaintenance_shouldReturnCreated_whenSaved() {
        when(robotService.logMaintenance(anyInt(), any(), any(), anyString(), anyString()))
                .thenReturn(mockMaintenance);

        Map<String, String> maintenanceData = new HashMap<>();
        maintenanceData.put("lastServiceDate", "2025-01-01");
        maintenanceData.put("nextServiceDate", "2025-06-01");
        maintenanceData.put("partReplaced", "Battery");
        maintenanceData.put("technicianNotes", "Replaced battery");

        ResponseEntity<?> response = robotController.logRobotMaintenance(1, maintenanceData);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(mockMaintenance, response.getBody());
    }

    @Test
    void logMaintenance_shouldReturn404_whenRobotNotFound() {
        when(robotService.logMaintenance(anyInt(), any(), any(), anyString(), anyString()))
                .thenReturn(null);

        Map<String, String> maintenanceData = new HashMap<>();
        maintenanceData.put("lastServiceDate", "2025-01-01");
        maintenanceData.put("nextServiceDate", "2025-06-01");
        maintenanceData.put("partReplaced", "Battery");
        maintenanceData.put("technicianNotes", "Replaced battery");

        ResponseEntity<?> response = robotController.logRobotMaintenance(99, maintenanceData);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void getMaintenanceHistory_shouldReturnList_whenFound() {
        when(robotService.getMaintenanceHistory(1)).thenReturn(List.of(mockMaintenance));

        ResponseEntity<List<RobotMaintenance>> response = robotController.getMaintenanceHistory(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(1, response.getBody().size());
    }

    @Test
    void getMaintenanceHistory_shouldReturnNoContent_whenEmpty() {
        when(robotService.getMaintenanceHistory(99)).thenReturn(List.of());

        ResponseEntity<List<RobotMaintenance>> response = robotController.getMaintenanceHistory(99);

        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
    }

    // ─── OVERVIEW ────────────────────────────────────────────────────────────

    @Test
    void getAllRobotOverview_shouldReturnList() {
        when(robotRepository.findAll()).thenReturn(List.of(mockRobot));

        List<Robot> response = robotController.getAllRobotOverview();

        assertEquals(1, response.size());
        assertEquals("RoboLib-01", response.get(0).getRobotName());
    }
}