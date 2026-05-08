#!/usr/bin/env bash
set -euo pipefail

PORT="${1:-8080}"
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

printf 'Starting local preview server...\n'
printf 'Root: %s\n' "$ROOT_DIR"
printf 'Port: %s\n\n' "$PORT"
printf 'Open in browser:\n'
printf '  http://localhost:%s/en/\n' "$PORT"
printf '  http://localhost:%s/en/length/cm-to-inches/\n' "$PORT"
printf '  http://localhost:%s/zh-cn/length/cm-to-inches/\n' "$PORT"
printf '  http://localhost:%s/fr/length/cm-to-inches/\n\n' "$PORT"
printf 'Press Ctrl+C to stop.\n\n'

cd "$ROOT_DIR"
python3 -m http.server "$PORT"
