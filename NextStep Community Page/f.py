def check_sudoku_validity_and_get_errors(grid, hints, allowed_numbers, K):
    # Initialize structures to track errors
    errors = []
    pre_filled_set = set()
    
    # Check rows, columns, and sub-grids
    for i in range(9):
        row_set = set()
        col_set = set()
        
        for j in range(9):
            # Check row
            if grid[i][j] != 0:
                if grid[i][j] in row_set:
                    errors.append((i, j))
                else:
                    row_set.add(grid[i][j])
            
            # Check column
            if grid[j][i] != 0:
                if grid[j][i] in col_set:
                    errors.append((j, i))
                else:
                    col_set.add(grid[j][i])
        
        # Check 3x3 sub-grids
        for x in range(3):
            for y in range(3):
                sub_grid_set = set()
                for a in range(3):
                    for b in range(3):
                        num = grid[i // 3 * 3 + a][i % 3 * 3 + b]
                        if num != 0:
                            if num in sub_grid_set:
                                errors.append((i // 3 * 3 + a, i % 3 * 3 + b))
                            else:
                                sub_grid_set.add(num)

    # Filter errors to only include non-pre-filled and hinted cells
    final_errors = []
    for x, y in errors:
        if grid[x][y] != 0:
            if grid[x][y] % 10 == 0:  # hinted cells
                final_errors.append((x, y))
        elif (grid[x][y] == 0):  # empty cells
            final_errors.append((x, y))

    # Count of errors
    error_count = len(final_errors)
    
    # Determine if Tina can win
    if error_count == 0:
        return "Won"
    elif error_count > K:
        return "Impossible"
    else:
        return final_errors


def main():
    grid = []
    
    # Read the 9x9 grid
    for _ in range(9):
        row = list(map(int, input().strip().split()))
        grid.append(row)
    
    # Read allowed numbers
    allowed_numbers = list(map(int, input().strip().split()))
    
    # Read the maximum allowed errors
    K = int(input().strip())
    
    # Check the grid for validity and errors
    result = check_sudoku_validity_and_get_errors(grid, allowed_numbers, allowed_numbers, K)
    
    if result == "Won":
        print(result)
    elif result == "Impossible":
        print(result)
    else:
        for x, y in result:
            print(x, y)


if __name__ == "__main__":
    main()
