import numpy as np

# Número de puntos a usar
N = 100000

# ------------------------
# Integral 1
x1 = np.random.uniform(-1, 1, N)
y1 = np.random.uniform(-2, 2, N)
z1 = np.random.uniform(-2, 2, N)
w1 = np.random.uniform(-3, 3, N)

f1 = 2*x1 + y1 + z1 + w1
volumen1 = (2)*(4)*(4)*(6)
resultado1 = volumen1 * np.mean(f1)

# ------------------------
# Integral 2
x2 = np.random.uniform(-2, 1, N)
y2 = np.random.uniform(0, 3, N)
z2 = np.random.uniform(-2, 2, N)
w2 = np.random.uniform(-1, 1, N)

f2 = np.exp(-(x2**2 + y2**2 + z2**2 + w2**2))
volumen2 = (3)*(3)*(4)*(2)
resultado2 = volumen2 * np.mean(f2)

# ------------------------
# Integral 3
x3 = np.random.uniform(-2, -1, N)
y3 = np.random.uniform(0, 1, N)
z3 = np.random.uniform(2, 4, N)
w3 = np.random.uniform(-3, 1, N)

f3 = 1 / (1 + x3**2 + y3**2 + z3**2 + w3**2)
volumen3 = (1)*(1)*(2)*(4)
resultado3 = volumen3 * np.mean(f3)

# ------------------------
# Integral 4
x4 = np.random.uniform(0, 1, N)
y4 = np.random.uniform(1, 3, N)
z4 = np.random.uniform(1, 3, N)
w4 = np.random.uniform(0, 4, N)

f4 = 2*x4 - 3*y4 + 4*z4 + 5*w4 + 3
volumen4 = (1)*(2)*(2)*(4)
resultado4 = volumen4 * np.mean(f4)

# Mostrar resultados
print(f"Resultado Integral 1: {resultado1}")
print(f"Resultado Integral 2: {resultado2}")
print(f"Resultado Integral 3: {resultado3}")
print(f"Resultado Integral 4: {resultado4}")
