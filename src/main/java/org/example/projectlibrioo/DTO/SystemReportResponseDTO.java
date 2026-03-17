package org.example.projectlibrioo.DTO;

import lombok.Data;
import java.util.List;

@Data
public class SystemReportResponseDTO {
    private List<SystemReportRowDTO> rows;
}