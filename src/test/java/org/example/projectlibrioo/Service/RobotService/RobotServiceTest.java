package org.example.projectlibrioo.Service.RobotService;

import org.example.projectlibrioo.Model.Robot;
import org.example.projectlibrioo.Model.RobotMaintenance;
import org.example.projectlibrioo.Repository.RobotMaintenanceRepo;
import org.example.projectlibrioo.Repository.RobotRepo;
import org.example.projectlibrioo.navigation.ShelfPathMap;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class RobotServiceTest {

    @Mock
    private ShelfPathMap shelfPathMap;

    @Mock
    private RobotRepo robotRepo;

    @Mock
    private RobotMaintenanceRepo robotMaintenanceRepo;

    @InjectMocks
    private RobotService robotService;

    private Robot testRobot;

    @BeforeEach
    void setUp() {
        testRobot = new Robot();
        testRobot.setRobotID(1);
        testRobot.setRobotName("LibriBot-Alpha");
        testRobot.setStatus("ACTIVE");
    }

    @Test
    void testSaveRobot_NewRobotDefaults() {
        // Arrange
        Robot newRobot = new Robot();
        newRobot.setRobotName("NewBot");
        // Status and StartDate are null by default

        when(robotRepo.save(any(Robot.class))).thenAnswer(i -> i.getArguments()[0]);

        // Act
        Robot savedRobot = robotService.saveRobot(newRobot);

        // Assert
        assertEquals("ACTIVE", savedRobot.getStatus());
        assertNotNull(savedRobot.getStartDate());
        verify(robotRepo, times(1)).save(newRobot);
    }

    @Test
    void testGetRobotById_Found() {
        when(robotRepo.findById(1)).thenReturn(Optional.of(testRobot));

        Robot found = robotService.getRobotById(1);

        assertNotNull(found);
        assertEquals("LibriBot-Alpha", found.getRobotName());
    }

    @Test
    void testLogMaintenance_Success() {
        // Arrange
        when(robotRepo.findById(1)).thenReturn(Optional.of(testRobot));
        
        RobotMaintenance mockLog = new RobotMaintenance();
        mockLog.setPartReplaced("Battery");
        
        when(robotMaintenanceRepo.save(any(RobotMaintenance.class))).thenReturn(mockLog);

        // Act
        RobotMaintenance result = robotService.logMaintenance(
                1, LocalDate.now().minusDays(30), LocalDate.now().plusDays(30), "Battery", "All looks good");

        // Assert
        assertNotNull(result);
        assertEquals("Battery", result.getPartReplaced());
        assertEquals("MAINTENANCE", testRobot.getStatus()); // Verify status flipped!
        verify(robotRepo, times(1)).save(testRobot); // Verify bot saved with new status
        verify(robotMaintenanceRepo, times(1)).save(any(RobotMaintenance.class));
    }
}
