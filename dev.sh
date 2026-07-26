#!/bin/bash
# Script de desarrollo con reinicio automático
# Uso: ./dev.sh

echo "🚀 Iniciando servidor Vite con auto-reinicio..."
echo "⚠️  Presiona Ctrl+C dos veces para detener completamente"
echo ""

while true; do
    npm run dev
    EXIT_CODE=$?
    
    if [ $EXIT_CODE -eq 0 ]; then
        echo "✅ Servidor detenido normalmente"
        break
    else
        echo "❌ Servidor crasheó (código: $EXIT_CODE)"
        echo "🔄 Reiniciando en 3 segundos..."
        sleep 3
    fi
done
