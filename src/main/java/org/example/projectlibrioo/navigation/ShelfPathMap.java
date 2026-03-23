package org.example.projectlibrioo.navigation;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class ShelfPathMap {
    private static final Map<Integer, List<String>> PATHS = Map.of(
            1, List.of("FORWARD", "LEFT"),
            2, List.of("FORWARD", "RIGHT"),
            3, List.of("FORWARD", "STRAIGHT")
    );

    public List<String> getPath(int shelfNumber) {
        return PATHS.getOrDefault(shelfNumber, List.of("STOP"));
    }
}
