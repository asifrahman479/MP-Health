# Generated by Django 3.0.3 on 2020-12-11 21:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Appointment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Subject', models.CharField(blank=True, max_length=96)),
                ('StartTime', models.DateTimeField(blank=True)),
                ('EndTime', models.DateTimeField(blank=True)),
                ('CategoryColor', models.CharField(blank=True, choices=[('#6665dd', 'Routine Check-Up'), ('#46d5c5', 'Examination'), ('#0facff', 'Telemedicine'), ('#fe6140', 'Emergency'), ('#f28e26', 'Sick')], max_length=10)),
                ('IsBlock', models.BooleanField(default=False)),
                ('Location', models.EmailField(blank=True, max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Clinic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ClinicName', models.CharField(blank=True, max_length=96)),
            ],
        ),
        migrations.CreateModel(
            name='DocAvailability',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Subject', models.CharField(blank=True, max_length=96)),
                ('StartTime', models.DateTimeField(blank=True)),
                ('EndTime', models.DateTimeField(blank=True)),
                ('IsBlock', models.BooleanField(default=True)),
                ('Location', models.EmailField(blank=True, max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('PatientName', models.CharField(blank=True, max_length=96)),
                ('Email', models.TextField(blank=True)),
                ('Phone', models.CharField(blank=True, max_length=12)),
            ],
        ),
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('DoctorName', models.CharField(blank=True, max_length=96)),
                ('Email', models.TextField(blank=True)),
                ('Phone', models.CharField(blank=True, max_length=12)),
                ('JobTitle', models.TextField(blank=True)),
                ('ClinicID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='clinic', to='user.Clinic')),
            ],
        ),
    ]
